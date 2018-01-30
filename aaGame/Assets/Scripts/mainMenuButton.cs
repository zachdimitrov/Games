using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class mainMenuButton : MonoBehaviour {

    private void OnMouseDown()
    {
        SceneManager.LoadScene("HomeScene");
    }
}
