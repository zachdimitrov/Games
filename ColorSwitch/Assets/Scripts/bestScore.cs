using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class bestScore : MonoBehaviour {
    public GameObject hiScore;

    private TextMesh hiScoreText;

    private int hi;

    // Use this for initialization
    void Start()
    {
        hiScoreText = hiScore.GetComponent<TextMesh>();

        if (PlayerPrefs.GetString("hiScore") == null)
        {
            PlayerPrefs.SetString("hiScore", "0");
        }

        hiScoreText.text = PlayerPrefs.GetString("hiScore");
    }
}
