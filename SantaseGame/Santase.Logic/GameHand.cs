namespace Santase.Logic
{
    using Contracts;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Cards;
    using RoundStates;
    using Players;
    using Exeptions;

    class GameHand : IGameHand
    {
        private Card firstPlayerCard;
        private Card secondPlayerCard;

        private Announce firstPlayerAnnounse;
        private Announce secondPlayerAnnounse;

        private PlayerPosition whoWillPlayFirst;

        private IPlayer firstPlayer;
        private IList<Card> firstPlayerCards;

        private IPlayer secondPlayer;
        private IList<Card> secondPlayerCards;

        private BaseRoundState state;
        private IDeck deck;
        private IPlayerActionValidator actionValidator;
        private PlayerPosition whoClosedTheGame;

        private PlayerPosition winner;

        public GameHand(PlayerPosition whoWillPlayFirst, IPlayer firstPlayer, IList<Card> firstPlayerCards,  IPlayer secondPlayer, IList<Card> secondPlayerCards, BaseRoundState state, IDeck deck)
        {
            this.whoWillPlayFirst = whoWillPlayFirst;
            this.firstPlayer = firstPlayer;
            this.firstPlayerCards = firstPlayerCards;
            this.secondPlayer = secondPlayer;
            this.secondPlayerCards = secondPlayerCards;
            this.state = state;
            this.deck = deck;
            this.actionValidator = new PlayerActionValidator();
            this.whoClosedTheGame = PlayerPosition.NoOne;
        }

        public Announce FirstPlayerAnnounce
        {
            get
            {
                return this.firstPlayerAnnounse;
            }
        }

        public Card FirstPlayerCard
        {
            get
            {
               return this.firstPlayerCard;
            }
        }

        public PlayerPosition GameClosedBy
        {
            get
            {
                return this.whoClosedTheGame;
            }
        }

        public Announce SecondPlayerAnnounce
        {
            get
            {
                return this.secondPlayerAnnounse;
            }
        }

        public Card SecondPlayerCard
        {
            get
            {
                return this.secondPlayerCard;
            }
        }

        public PlayerPosition Winner
        {
            get
            {
                return this.winner;
            }
        }

        public void Start()
        {
            IPlayer firstToPlay;
            IPlayer secondToPlay;
            IList<Card> firstToPlayCards;
            IList<Card> secondToPlayCards;

            if (this.whoWillPlayFirst == PlayerPosition.FirstPlayer)
            {
                firstToPlay = this.firstPlayer;
                secondToPlay = this.secondPlayer;
                firstToPlayCards = this.firstPlayerCards;
                secondToPlayCards = this.secondPlayerCards;
            }
            else
            {
                firstToPlay = this.secondPlayer;
                secondToPlay = this.firstPlayer;
                secondToPlayCards = this.firstPlayerCards;
                firstToPlayCards = this.secondPlayerCards;
            }

            var context = new PlayerTurnContext(this.state, this.deck.GetTrumpCard, deck.CartsLeft);

            PlayerAction firstPlayerAction = null;
            do
            {
                firstPlayerAction = this.FirstPlayerTurn(firstToPlay, context);
                if(!this.actionValidator.IsValid(firstPlayerAction, context, firstToPlayCards))
                {
                    throw new InternalGameException("Invalid turn!");
                }
            }
            while (firstPlayerAction.Type != PlayerActionType.PlayCard);

            context.FirstPlayedCard = firstPlayerAction.Card;
            
            PlayerAction secondPlayerAction = secondToPlay.GetTurn(context, this.actionValidator);

            if (!this.actionValidator.IsValid(secondPlayerAction, context, secondToPlayCards))
            {
                throw new InternalGameException("Invalid turn!");
            }

            context.SecondPlayedCard = secondPlayerAction.Card;

            if(firstToPlay == this.firstPlayer)
            {
                this.firstPlayerCard = firstPlayerAction.Card;
                this.firstPlayerAnnounse = firstPlayerAction.Announce;
                this.secondPlayerCard = secondPlayerAction.Card;
                this.secondPlayerAnnounse = secondPlayerAction.Announce;
            }
            else
            {
                this.firstPlayerCard = secondPlayerAction.Card;
                this.firstPlayerAnnounse = secondPlayerAction.Announce;
                this.secondPlayerCard = firstPlayerAction.Card;
                this.secondPlayerAnnounse = firstPlayerAction.Announce;
            }

            firstToPlay.EndTurn(context);
            secondToPlay.EndTurn(context);

            ICardWin cardWinner = new CardWin();
            if(firstToPlay == this.firstPlayer)
            {
                this.winner = cardWinner.Winner(firstPlayerAction.Card, secondPlayerAction.Card, this.deck.GetTrumpCard.Suit);
            }
            else
            {
                this.winner = cardWinner.Winner(secondPlayerAction.Card, firstPlayerAction.Card, this.deck.GetTrumpCard.Suit);
            }
        }

        private PlayerAction FirstPlayerTurn(IPlayer firstToPlay, PlayerTurnContext context)
        {
            var firstPlayTurn = firstToPlay.GetTurn(context, this.actionValidator);
            if (firstPlayTurn.Type == PlayerActionType.CloseGame)
            {
                this.state.Close();
                context.State = new FinalRoundState();
                this.state = new FinalRoundState();
                if(firstToPlay == this.firstPlayer)
                {
                    this.whoClosedTheGame = PlayerPosition.FirstPlayer;
                }
                else
                {
                    this.whoClosedTheGame = PlayerPosition.SecondPlayer;
                }
            }
            if(firstPlayTurn.Type == PlayerActionType.ChangeTrump)
            {
                var changeTrump = new Card(this.deck.GetTrumpCard.Suit, CardType.Nine);
                var oldTrump = this.deck.GetTrumpCard;
                context.TrumpCard = oldTrump;
                this.deck.ChangeTrumpCard(changeTrump);

                if (firstToPlay == this.firstPlayer)
                {
                    this.firstPlayerCards.Remove(changeTrump);
                    this.firstPlayerCards.Add(oldTrump);
                    this.firstPlayer.AddCard(oldTrump);
                }
                else
                {
                    this.secondPlayerCards.Remove(changeTrump);
                    this.secondPlayerCards.Add(oldTrump);
                    this.secondPlayer.AddCard(oldTrump);
                }
            }
            if (firstPlayTurn.Type == PlayerActionType.PlayCard)
            {

            }
            return firstPlayTurn;
        }
    }
}
