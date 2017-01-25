using Santase.Logic;
using Santase.Logic.Cards;
using Santase.Logic.Contracts;
using System;

namespace Santase.UI
{
    public static class Program
    {
        static void Main()
        {
            ISantaseGame game = new SantaseGame();
            game.StartGame();
            Console.WriteLine("Game finished!");
            Console.WriteLine("{0} - {1}", game.FirstPlayerTotalPoints, game.SecondPlayerTotalPoints);
        }
    }
}
