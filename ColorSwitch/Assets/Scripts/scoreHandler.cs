using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scoreHandler : MonoBehaviour {
    public GameObject currentScore;
    public GameObject hiScore;

    private TextMesh currentScoreText;
    private TextMesh hiScoreText;

    private int current;
    private int hi;

    // Use this for initialization
    void Start () {
        currentScoreText = currentScore.GetComponent<TextMesh>();
        hiScoreText = hiScore.GetComponent<TextMesh>();

        currentScoreText.text = PlayerPrefs.GetString("currentScore");

        current = int.Parse(PlayerPrefs.GetString("currentScore"));

		if(!PlayerPrefs.HasKey("hiScore"))
        {
			Debug.Log ("set hi score");
            PlayerPrefs.SetString("hiScore", "0");
        }

        hi = int.Parse(PlayerPrefs.GetString("hiScore"));

        if(current > hi)
        {
            PlayerPrefs.SetString("hiScore", current.ToString());
        }

        hiScoreText.text = PlayerPrefs.GetString("hiScore");
    }
}
