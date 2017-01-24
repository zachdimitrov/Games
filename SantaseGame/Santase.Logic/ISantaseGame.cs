namespace Santase.Logic
{
    public interface ISantaseGame
    {
        void StartGame();

        int FirstPlayerTotalPoints { get; }

        int SecondPlayerTotalPoints { get; }
    }
}