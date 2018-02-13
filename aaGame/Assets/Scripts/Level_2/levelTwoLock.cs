using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class levelTwoLock : MonoBehaviour {
    public GameObject thisObject;

    // Use this for initialization
    void Start()
    {
        if (PlayerPrefs.GetInt("level") < 2)
        {
            thisObject.SetActive(true);
        }
        else
        {
            thisObject.SetActive(false);
        }
    }
}
