using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Santase.Logic.Cards;

namespace SantaseTests
{
    [TestClass]
    public class TestCards
    {
        [TestMethod]
        public void CardShouldReturnAValidCard()
        {
            var type = CardType.Ace;
            var suit = CardSuit.Diamond;
            var card = new Card(suit, type);
            Assert.IsNotNull(card);
        }

        [TestMethod]
        public void CardShouldReturnCorrectToString()
        {
            var type = CardType.Ace;
            var suit = CardSuit.Diamond;
            var card = new Card(suit, type);
            Assert.AreEqual("A♦", card.ToString());
        }

        [TestMethod]
        public void EqualCardsShouldCOmpareCorrectly()
        {
            var type = CardType.Ace;
            var suit = CardSuit.Diamond;
            var card1 = new Card(suit, type);
            var card2 = new Card(suit, type);
            Assert.IsTrue(card1.Equals(card2));
        }

        [TestMethod]
        public void DifferentCardsShouldCompareCorrectly()
        {
            var type1 = CardType.Ace;
            var suit1 = CardSuit.Diamond;
            var type2 = CardType.Jack;
            var card1 = new Card(suit1, type1);
            var card2 = new Card(suit1, type2);
            Assert.IsFalse(card1.Equals(card2));
        }


    }
}
