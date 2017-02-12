using Santase.Logic.Cards;

namespace Santase.Logic.Players
{ 
    public class PlayerAction
    {
        public PlayerAction(PlayerActionType type, Card card, Announce announse)
        {
            this.Type = type;
            this.Card = card;
            this.Announce = Announce;
        }
        public Card Card { get; private set; }
        public PlayerActionType Type { get; private set; }
        public Announce Announce { get; private set; }
    }
}