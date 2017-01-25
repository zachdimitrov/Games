namespace Santase.Logic.Contracts
{
    public interface ISantaseGame
    {
        void StartGame();

        int FirstPlayerTotalPoints { get; }

        int SecondPlayerTotalPoints { get; }
    }
}