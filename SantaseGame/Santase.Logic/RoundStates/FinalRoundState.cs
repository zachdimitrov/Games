using System;
using Santase.Logic.Contracts;

namespace Santase.Logic.RoundStates
{
    internal class FinalRoundState : BaseRoundState
    {
        public FinalRoundState() : base(null)
        {
        }

        public FinalRoundState(IGameRound round) : base(round)
        {
        }

        public override bool CanAnnounse20or40
        {
            get
            {
                return false;
            }
        }

        public override bool CanChangeTrump
        {
            get
            {
                return false;
            }
        }

        public override bool CanClose
        {
            get
            {
                return false;
            }
        }

        public override bool ShouldDrawCard
        {
            get
            {
                return false;
            }
        }

        public override bool ShouwdObserveRules
        {
            get
            {
                return true;
            }
        }

        internal override void PlayHand(int cardsLeftInDeck)
        {
        }
    }
}