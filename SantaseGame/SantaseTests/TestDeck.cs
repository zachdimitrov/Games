using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Santase.Logic.Cards;

namespace SantaseTests
{
    [TestClass]
    public class TestDeck
    {
        [TestMethod]
        public void DeckConstructorShouldWorkCorrectly()
        {
            var deck = new Deck();
            Assert.IsInstanceOfType(deck, typeof(Deck));
        } 
    }
}
