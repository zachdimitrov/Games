namespace Santase.Logic.RoundStates
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Contracts;

    class MoreThan2CardsState : BaseRoundState
    {
        public MoreThan2CardsState(IGameRound round) : base(round)
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
                return true;
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
            if (cardsLeftInDeck == 2)
            {
                this.round.SetState(new TwoCardsLeftState(this.round));
            }
        }
    }
}
