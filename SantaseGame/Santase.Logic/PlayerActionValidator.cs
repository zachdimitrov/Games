using Santase.Logic.Contracts;
using System.Collections.Generic;
using System.Linq;
using Santase.Logic.Players;
using Santase.Logic.Cards;
using Santase.Logic.RoundStates;

namespace Santase.Logic
{
    public class PlayerActionValidator : IPlayerActionValidator
    {
        public bool IsValid(PlayerAction action, PlayerTurnContext context, IList<Card> playerCards)
        {
            if (!context.AmITheFirstPlayer)
            {
                action.Announce = Announce.None;
            }

            if (action.Type == PlayerActionType.PlayCard)
            {
                if (!playerCards.Contains(action.Card))
                {
                    return false;
                }

                if (action.Announce != Announce.None)
                {
                    if (action.Card.Type != CardType.Queen && action.Card.Type != CardType.King)
                    {
                        action.Announce = Announce.None;
                    }

                    // TODO: Check for another card
                }

                if(context.State.ShouwdObserveRules)
                {
                    if(!context.AmITheFirstPlayer)
                    {
                        var firstCard = context.FirstPlayedCard;
                        var ourCard = action.Card;

                        if(firstCard.Suit != ourCard.Suit)
                        {
                           if( ourCard.Suit != context.TrumpCard.Suit)
                            {
                                var hadTrump = playerCards.Any(c => c.Suit == context.TrumpCard.Suit);
                                if (hadTrump)
                                {
                                    return false;
                                }
                            }
                        }
                        else
                        {
                            if (ourCard.GetValue() < firstCard.GetValue())
                            {
                                var hasBigger = playerCards.Any(c => c.GetValue() > firstCard.GetValue());
                                if (hasBigger)
                                {
                                    return false;
                                }
                            }
                        }
                        
                    }
                }
            }

            if (action.Type == PlayerActionType.CloseGame && !(context.State is FinalRoundState))
            {
                if (!context.State.CanClose || !context.AmITheFirstPlayer)
                {
                    return false;
                }
            }

            if (action.Type == PlayerActionType.ChangeTrump)
            {
                if(!context.State.CanChangeTrump || !context.AmITheFirstPlayer)
                {
                    return false;
                }

                if (!playerCards.Contains(new Cards.Card(context.TrumpCard.Suit, CardType.Nine)))
                {
                    return false;
                }
            }

            

            return true;
            // 5:25
        }
    }
}
