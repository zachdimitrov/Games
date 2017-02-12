﻿using Santase.Logic.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Santase.Logic.RoundStates
{
    public abstract class BaseRoundState
    {
        protected IGameRound round;

        protected BaseRoundState(IGameRound round)
        {
            this.round = round;
        }

        public abstract bool CanAnnounse20or40 { get; }

        public abstract bool CanClose { get; }

        public abstract bool CanChangeTrump { get; }

        public abstract bool ShouwdObserveRules { get; }

        public abstract bool ShouldDrawCard { get; }

        public abstract void PlayHand(int cardsLeftInDeck);

        public void Close()
        {
            if (this.CanClose)
            {
                round.SetState(new FinalRoundState(this.round));
            }
        }
    }
}
