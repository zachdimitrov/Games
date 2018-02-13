using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class loadPrevious : MonoBehaviour {
	void OnMouseDown()
    {
        SceneManager.LoadScene(PlayerPrefs.GetString("previous"));
    }
}
