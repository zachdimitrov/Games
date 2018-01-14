using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class startGame : MonoBehaviour
{
    // Update is called once per frame
    private void OnMouseDown()
    {
        SceneManager.LoadScene("gameplay");
    }
}
