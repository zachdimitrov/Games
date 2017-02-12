using Santase.Logic.Cards;

namespace Santase.Logic.Contracts
{
    public interface IDeck
    {
        Card GetNextCard();

        Card GetTrumpCard { get; }

        void ChangeTrumpCard(Card newCard);

        int CartsLeft { get; }
    }
}
