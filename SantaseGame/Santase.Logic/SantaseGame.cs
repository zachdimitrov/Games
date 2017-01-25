using Santase.Logic.Contracts;
using System;

namespace Santase.Logic
{
    public class SantaseGame : ISantaseGame
    {
        int firstPlayerTotalPoints;
        int secondPlayerTotalPoints;

        public SantaseGame()
        {
            this.firstPlayerTotalPoints = 0;
            this.secondPlayerTotalPoints = 0;
        }

        public int FirstPlayerTotalPoints
        {
            get
            {
                return this.firstPlayerTotalPoints;
            }
        }

        public int SecondPlayerTotalPoints
        {
            get
            {
                return this.secondPlayerTotalPoints;
            }
        }

        public void StartGame()
        {
            while (!this.IsGameFinished())
            {
                this.PlayRound();
            }
        }

        private void PlayRound()
        {
            IGameRound round = new GameRound();
            round.Start();
            this.firstPlayerTotalPoints += round.TotalPointsWonByFirstPlayer;
            this.secondPlayerTotalPoints += round.TotalPointsWonBySecondPlayer;
        }

        private bool IsGameFinished()
        {
            return this.FirstPlayerTotalPoints >= 11 || this.SecondPlayerTotalPoints >= 11;
        }
    }
}
