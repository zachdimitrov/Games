namespace Santase.Logic.Contracts
{
    public interface IGameRound
    {
        void Start();

        int TotalPointsWonByFirstPlayer { get; }
        int TotalPointsWonBySecondPlayer { get; }
    }
}