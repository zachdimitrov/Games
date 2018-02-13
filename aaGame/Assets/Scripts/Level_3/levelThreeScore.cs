using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class levelThreeScore : MonoBehaviour {
    public GameObject scoreObj;
    private TextMesh scoreTxt;
    public static int scoreValue;

    // Use this for initialization
    void Start()
    {
        scoreTxt = scoreObj.GetComponent<TextMesh>();
        scoreValue = 0;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.tag == "PinLevel")
        {
            scoreValue++;
            PlayerPrefs.SetInt("currentScore", scoreValue);
            scoreTxt.text = System.Convert.ToString(scoreValue);

            if (scoreValue == 33)
            {
                if (PlayerPrefs.GetInt("level") < 4)
                {
                    PlayerPrefs.SetInt("level", 4);
                }

                SceneManager.LoadScene("LevelSuccess");
            }
        }
    }
}
