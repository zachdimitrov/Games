namespace Santase.Logic
{
    using Contracts;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Cards;
    using RoundStates;
    using Players;

    class GameHand : IGameHand
    {
        private Card firstPlayerCard;
        private Card secondPlayerCard;
        private PlayerPosition whoWillPlayFirst;
        private IPlayer firstPlayer;
        private IPlayer secondPlayer;
        private BaseRoundState state;
        private IDeck deck;

        public GameHand(PlayerPosition whoWillPlayFirst, IPlayer firstPlayer, IPlayer secondPlayer, BaseRoundState state, IDeck deck)
        {
            this.whoWillPlayFirst = whoWillPlayFirst;
            this.firstPlayer = firstPlayer;
            this.secondPlayer = secondPlayer;
            this.state = state;
            this.deck = deck;
        }

        public Announce FirstPlayerAnnounce
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public Card FirstPlayerCard
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public PlayerPosition GameClosedBy
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public Announce SecondPlayerAnnounce
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public Card SecondPlayerCard
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public PlayerPosition Winner
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void Start()
        {
            IPlayer firstToPlay;
            IPlayer secondToPlay;
            if(this.whoWillPlayFirst == PlayerPosition.FirstPlayer)
            {
                firstToPlay = this.firstPlayer;
                secondToPlay = this.secondPlayer;
            }
            else
            {
                firstToPlay = this.secondPlayer;
                secondToPlay = this.firstPlayer;
            }

            PlayerAction firstPlayerPlayedTurn = null;
            do
            {
                firstPlayerPlayedTurn = this.FirstPlayerTurn(firstToPlay);
            }
            while (firstPlayerPlayedTurn.Type != PlayerActionType.PlayCard);
            
            PlayerAction secondPlayerAction = secondToPlay.GetTurn(new PlayerTurnContext(this.deck.GetTrumpCard), new PlayerActionValidator());
            // TODO: if change
 
            // TODO: who win
        }

        private PlayerAction FirstPlayerTurn(IPlayer firstToPlay)
        {
            var firstPlayTurn = firstToPlay.GetTurn(new PlayerTurnContext(this.deck.GetTrumpCard), new PlayerActionValidator());
            if (firstPlayTurn.Type == PlayerActionType.CloseGame)
            {
                this.state.Close();
            }
            if(firstPlayTurn.Type == PlayerActionType.ChangeTrump)
            {
            }
            if (firstPlayTurn.Type == PlayerActionType.PlayCard)
            {
            }
            return firstPlayTurn;
        }
    }
}
