using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class levelOneScore : MonoBehaviour {
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

            if (scoreValue == 20)
            {
                if (PlayerPrefs.GetInt("level") < 2)
                {
                    PlayerPrefs.SetInt("level", 2);
                }

                SceneManager.LoadScene("LevelSuccess");
            }
        }
    }
}
