﻿using Santase.Logic.RoundStates;

namespace Santase.Logic.Contracts
{
    public interface IGameRound
    {
        void Start();

        void SetState(BaseRoundState newState);

        int FirstPlayerPoints { get; }

        int SecondPlayerPoints { get; }

        bool FirstPlayerHasHand { get; }

        bool SecondPlayerHasHand { get; }

        PlayerPosition ClosedByPlayer { get; }

        PlayerPosition LastHandInPlayer { get; }
    }
}