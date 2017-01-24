using Santase.Logic.Cards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Santase.Logic.Contracts
{
    public interface IDeck
    {
        Card GetNextCard();

        Card GetTrumpCard { get; }

        void ChangeTrumpCard(Card newCard);
    }
}
