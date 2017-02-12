namespace Santase.Logic.RoundStates
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Contracts;

    class TwoCardsLeftState : BaseRoundState
    {
        public TwoCardsLeftState(IGameRound round) : base(round)
        {
        }

        public override bool CanAnnounse20or40
        {
            get
            {
                return true;
            }
        }

        public override bool CanChangeTrump
        {
            get
            {
                return true;
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
                return true;
            }
        }

        public override bool ShouwdObserveRules
        {
            get
            {
                return false;
            }
        }

        public override void PlayHand(int cardsLeftInDeck)
        {
            this.round.SetState(new FinalRoundState(this.round));
        }
    }
}
