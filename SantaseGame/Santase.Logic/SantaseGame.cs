using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
                this.PLayRound();
            }
        }

        private void PLayRound()
        {
            throw new NotImplementedException();
        }

        private bool IsGameFinished()
        {
            return this.FirstPlayerTotalPoints >= 11 || this.SecondPlayerTotalPoints >= 11;
        }
    }
}
