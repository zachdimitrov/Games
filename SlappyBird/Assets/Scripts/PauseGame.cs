using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PauseGame : MonoBehaviour {
    public GameObject playButton;
    public GameObject pauseButton;

    // Use this for initialization
    void Start () {

	}
	
	// Update is called once per frame
	void Update () {
		
	}

    private void OnMouseDown()
    {
        playButton.SetActive(true);
        GameControls.instance.paused = true;
        Time.timeScale = 0;
        pauseButton.SetActive(false);
    }
}
