using Santase.Logic.Cards;

namespace Santase.Logic.Players
{
    public class PlayerTurnContext
    {
        public PlayerTurnContext(Card trumpCard)
        {
            this.TrumpCard = trumpCard;
        }
        public Card TrumpCard { get; private set; }

        public Card FirstPlayedCard { get; internal set; }

        public Card SecondPlayedCard { get; internal set; }

        public bool AmITheFirstPlayer
        {
            get
            {
                return this.FirstPlayedCard == null;
            }
        }

    }
}