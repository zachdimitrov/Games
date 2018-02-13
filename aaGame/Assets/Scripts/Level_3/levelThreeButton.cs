using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class levelThreeButton : MonoBehaviour {
    public GameObject thisObject;

    private void OnMouseDown()
    {
        SceneManager.LoadScene("Level_3");
    }
    // Use this for initialization
    void Start()
    {
        if (PlayerPrefs.GetInt("level") > 2)
        {
            thisObject.SetActive(true);
        }
        else
        {
            thisObject.SetActive(false);
        }
    }
}
