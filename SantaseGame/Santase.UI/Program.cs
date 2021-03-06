﻿using Santase.Logic;
using Santase.Logic.Cards;
using Santase.Logic.Contracts;
using System;
using System.Text;

namespace Santase.UI
{
    public static class Program
    {
        static void Main()
        {
            Console.OutputEncoding = Encoding.UTF8;
            ISantaseGame game = new SantaseGame(new ConsolePlayer(6, 10), new ConsolePlayer(10, 10), PlayerPosition.FirstPlayer);
            game.StartGame();
            Console.WriteLine("Game finished!");
            Console.WriteLine("{0} - {1}", game.FirstPlayerTotalPoints, game.SecondPlayerTotalPoints);
            Console.WriteLine("Rounds: {0}", game.RoundsPlayed);
        }
    }
}
