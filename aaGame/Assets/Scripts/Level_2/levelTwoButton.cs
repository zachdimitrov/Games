using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class levelTwoButton : MonoBehaviour {
    public GameObject thisObject;

    private void OnMouseDown()
    {
        SceneManager.LoadScene("Level_2");
    }
    // Use this for initialization
    void Start ()
    {
        if (PlayerPrefs.GetInt("level") > 1)
        {
            thisObject.active = true;
        }
        else
        {
            thisObject.active = false;
        }
    }
}
