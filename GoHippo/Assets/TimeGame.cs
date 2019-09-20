using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TimeGame : MonoBehaviour
{

    float roundStartTime;
    int waitTime;
    bool gameEnded;

    // Use this for initialization
    void Start()
    {
        print("Press the spacebar once you thing the given time is up.");
        SetNewRandomTime();
        gameEnded = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (gameEnded)
            {
                SetNewRandomTime();
                gameEnded = false;
            }
            else
            {
                float playerWaitTime = Time.time - roundStartTime;
                float error = Mathf.Abs(waitTime - playerWaitTime);

                string message = "";
                if (error < 0.1f)
                {
                    message = "Outstanding!";
                }
                else if (error >= 0.1f && error < 0.5f)
                {
                    message = "Good!";
                }
                else if (error >= 0.5f && error < 1f)
                {
                    message = "Plausable.";
                }
                else if (error >= 1f)
                {
                    message = "Too bad, try again!";
                }

                print(message);
                print("You waited for " + playerWaitTime + " seconds. That is " + error + " seconds off!");
                gameEnded = true;
            }
        }
    }

    void SetNewRandomTime()
    {
        int waitTime = Random.Range(3, 11);
        roundStartTime = Time.time;
        print(waitTime + " seconds");
    }
}
