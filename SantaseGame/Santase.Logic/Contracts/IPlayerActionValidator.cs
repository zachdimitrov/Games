namespace Santase.Logic.Contracts
{
    using Players;
    using System;
    using System.Collections.Generic;

    public interface IPlayerActionValidator
    {
        bool IsValid(PlayerAction action, PlayerTurnContext context);
    }
}