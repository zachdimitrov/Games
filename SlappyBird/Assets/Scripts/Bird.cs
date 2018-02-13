using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bird : MonoBehaviour {
    public GameObject pauseButton;
    public GameObject playButton;

    private Rigidbody2D rb;
    private bool isDead = false;
    private Animator anim;

	// Use this for initialization
	void Start () {
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
        anim.SetTrigger("fly");
	}
	
	// Update is called once per frame
	void Update () {
		if(isDead == false && 
            GameControls.instance.paused == false && 
            Input.GetMouseButtonDown(0) && 
            Input.mousePosition.y < 1700f)
        {
            rb.velocity = Vector2.zero;
            rb.AddForce(new Vector2(0, 200));
            anim.SetTrigger("fly1");

            pauseButton.SetActive(true);
            playButton.SetActive(false);
        }
	}

    private void OnCollisionEnter2D(Collision2D collision)
    {
        isDead = true;
        GameControls.instance.BirdDied();
        anim.SetTrigger("dead");

        pauseButton.SetActive(false);
        playButton.SetActive(false);
    }
}
