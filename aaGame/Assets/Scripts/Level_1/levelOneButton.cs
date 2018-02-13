using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class levelOneButton : MonoBehaviour {
    private void OnMouseDown()
    {
        SceneManager.LoadScene("Level_1");
    }
}
