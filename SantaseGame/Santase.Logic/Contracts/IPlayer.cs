namespace Santase.Logic.Contracts
{
    using Cards;
    using Players;
    using System;
    using System.Collections.Generic;

    public interface IPlayer
    {
        void AddCard(Card card);

        PlayerAction GetTurn(PlayerTurnContext context, IPlayerActionValidator actionValidator);

        void EndTurn(PlayerTurnContext context);
 
    }
}