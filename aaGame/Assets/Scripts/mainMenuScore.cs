using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mainMenuScore : MonoBehaviour {
    public GameObject scoreObj;
    private TextMesh scoreTxt;

	// Use this for initialization
	void Start () {
        scoreTxt = scoreObj.GetComponent<TextMesh>();
        scoreTxt.text = PlayerPrefs.GetInt("highScore").ToString();
	}
}
