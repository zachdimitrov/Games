using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class exitGame : MonoBehaviour {
    private string loaded;

    private void Start()
    {
        loaded = SceneManager.GetActiveScene().name;
        PlayerPrefs.SetString("previous", loaded);
    }

    private void OnMouseDown()
    {
        // Application.Quit();
        SceneManager.LoadScene("Quit");
    }
}
