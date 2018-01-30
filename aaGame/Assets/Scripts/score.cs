using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class score : MonoBehaviour {
    public GameObject scoreObj;
    private TextMesh scoreTxt;
    public static int scoreValue;

	// Use this for initialization
	void Start () {
        scoreTxt = scoreObj.GetComponent<TextMesh>();
        scoreValue = 0;
        PlayerPrefs.SetInt("currentScore", 0);
	}

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.tag == "Pin")
        {
            scoreValue++;
            scoreTxt.text = System.Convert.ToString(scoreValue);
            PlayerPrefs.SetInt("currentScore", scoreValue);
        }
    }
}
