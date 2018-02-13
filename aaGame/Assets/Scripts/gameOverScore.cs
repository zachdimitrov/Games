using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class gameOverScore : MonoBehaviour {
    public GameObject hiScore;
    public GameObject currentScore;
    private TextMesh hiScoreTxt;
    private TextMesh currentScoreTxt;

	// Use this for initialization
	void Start () {
        hiScoreTxt = hiScore.GetComponent<TextMesh>();
        currentScoreTxt = currentScore.GetComponent<TextMesh>();

        currentScoreTxt.text = System.Convert.ToString(PlayerPrefs.GetInt("currentScore"));

        if (PlayerPrefs.GetInt("currentScore") > PlayerPrefs.GetInt("highScore"))
        {
            PlayerPrefs.SetInt("highScore", PlayerPrefs.GetInt("currentScore"));
        }

        hiScoreTxt.text = System.Convert.ToString(PlayerPrefs.GetInt("highScore"));
    }
}
