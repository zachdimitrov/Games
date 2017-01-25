namespace Santase.Logic.Contracts
{
    public interface IGameRound
    {
        void Start();

        int FirstPlayerPoints { get; }

        int SecondPlayerPoints { get; }

        bool FirstPlayerHasHand { get; }

        bool SecondPlayerHasHand { get; }

        PlayerPosition ClosedByPlayer { get; }
    }
}