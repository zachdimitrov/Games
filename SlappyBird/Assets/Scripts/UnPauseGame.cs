using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UnPauseGame : MonoBehaviour {
    public GameObject pauseButton;
    public GameObject playButton;

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    private void OnMouseDown()
    {
        pauseButton.SetActive(true);
        GameControls.instance.paused = false;
        Time.timeScale = 1;
        playButton.SetActive(true);
    }
}
