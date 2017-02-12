namespace Santase.UI
{
    using Logic;
    using Logic.Cards;
    using Logic.Contracts;
    using Logic.Players;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;

    public class ConsolePlayer : BasePlayer
    {
        int row;
        int col;

        public ConsolePlayer(int row, int col)
        {
            this.row = row;
            this.col = col;
        }

        public override void AddCard(Card card)
        {
            base.AddCard(card);
            Console.SetCursorPosition(this.col, this.row);
            foreach (var c in this.cards)
            {
                Console.Write("{0} ", c.ToString());
            }
            Thread.Sleep(300);
        }

        public override PlayerAction GetTurn(PlayerTurnContext context, IPlayerActionValidator actionValidator)
        {
            while (true)
            {
                PlayerAction playerAction = null;

                Console.SetCursorPosition(0, this.row + 1);
                Console.Write("Turn? [1-{0}]=Card; [T]=Change trump; [C]=Close: ", this.cards.Count);
                var userActionAsString = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(userActionAsString))
                {
                    Console.WriteLine("Empty turn!                                       ");
                    continue;
                }
                if (userActionAsString[0] >= '1' && userActionAsString[0] <= '6')
                {
                    var cardIndex = int.Parse(userActionAsString[0].ToString()) - 1;
                    if (cardIndex >= this.cards.Count)
                    {
                        Console.WriteLine("Invalid card!                                 ");
                        continue;
                    }

                    var card = this.cards[cardIndex];
                    var possibleAnnounse = Announce.None;

                    if (context.AmITheFirstPlayer)
                    {
                        possibleAnnounse = this.PossibleAnnounce(card, context.TrumpCard);
                        if (possibleAnnounse != Announce.None)
                        {
                            // TODO: check if first
                            while (true)
                            {
                                Console.SetCursorPosition(0, this.row + 2);
                                Console.Write("Announce {0} [Y / N]? ", possibleAnnounse.ToString());
                                var userInput = Console.ReadLine();
                                if (string.IsNullOrWhiteSpace(userInput))
                                {
                                    Console.WriteLine("Emptty announce please enter [Y / N]!      ");
                                    continue;
                                }
                                if (userInput[0] == 'N')
                                {
                                    possibleAnnounse = Announce.None;
                                }
                                else if (userInput[0] == 'Y')
                                {
                                    break;
                                }
                                else
                                {
                                    Console.WriteLine("Wrong announce, please enter [Y / N]!      ");
                                    continue;
                                }
                            }
                        }
                    }
                    playerAction = new PlayerAction(PlayerActionType.PlayCard, card, possibleAnnounse);
                    // Play card
                    // enough cards
                    // 20 or 40?
                    // 4:11
                }
                else if (userActionAsString[0] == 'T')
                {
                    playerAction = new PlayerAction(PlayerActionType.ChangeTrump, null, Announce.None);
                }
                else if (userActionAsString[0] == 'C')
                {
                    playerAction = new PlayerAction(PlayerActionType.CloseGame, null, Announce.None);
                }
                else
                {
                    Console.WriteLine("Invalid turn!                                    ");
                    continue;
                }

                if (actionValidator.IsValid(playerAction, context))
                {
                    return playerAction;
                }
                else
                {
                    Console.WriteLine("Invalid action!                                    ");
                    continue;
                }
            }
        }
    }
}
