using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Santase.Logic.Contracts;

namespace Santase.Logic.RoundStates
{
    public class StartRoundState : BaseRoundState
    {
        public StartRoundState(IGameRound round) : base(round)
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
            this.round.SetState(new MoreThan2CardsState(this.round));
        }
    }
}
