using Santase.Logic.Contracts;
using Santase.Logic.Exeptions;
using Santase.Logic.Tools;
using System.Collections.Generic;
using System.Linq;

namespace Santase.Logic.Cards
{
    public class Deck : IDeck
    {
        private IList<Card> listOFCards;

        private Card trumpCard;

        public Deck()
        {
            this.listOFCards = new List<Card>();
            foreach (var cardSuit in this.GetAllCardSuits())
            {
                foreach(var cardType in this.GetAllCardTypes())
                {
                    this.listOFCards.Add(new Card(cardSuit, cardType));
                }
            }
            this.listOFCards = this.listOFCards.Shuffle().ToList();
            this.trumpCard = listOFCards[0];
        }

        public Card GetTrumpCard
        {
            get
            {
                return this.trumpCard;
            }
        }

        public void ChangeTrumpCard(Card newCard)
        {
            this.trumpCard = newCard;
            if (this.listOFCards.Count > 0)
            {
                this.listOFCards[0] = newCard;
            }
        }

        public Card GetNextCard()
        {
            if (this.listOFCards.Count == 0)
            {
                throw new InternalGameException("Deck is empty!");
            }

            var card = this.listOFCards[this.listOFCards.Count - 1];
            this.listOFCards.RemoveAt(this.listOFCards.Count - 1);
            return card;
        }

        private IEnumerable<CardType> GetAllCardTypes()
        {
            return new List<CardType>
            {
                CardType.Nine,
                CardType.Ten,
                CardType.Jack,
                CardType.Queen,
                CardType.King,
                CardType.Ace
            };
        }

        private IEnumerable<CardSuit> GetAllCardSuits()
        {
            return new List<CardSuit>
            {
                CardSuit.Club,
                CardSuit.Diamond,
                CardSuit.Spade,
                CardSuit.Heart
            };
        }
    }
}
