using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DisplayScore : MonoBehaviour {
    public Text current;
    public Text best;

    // Use this for initialization
    void Start () {
        current.text = PlayerPrefs.GetInt("current").ToString();
        best.text = PlayerPrefs.GetInt("best").ToString();
    }
}
