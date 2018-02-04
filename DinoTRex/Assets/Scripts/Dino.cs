using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Dino : MonoBehaviour {

    public float multiplier = 10f;
    public float jumpSpeed = 20f;
    private Rigidbody2D rb;

    // Use this for initialization
    void Start ()
    {
		rb = GetComponent<Rigidbody2D>();
	}
	
	// Update is called once per frame
	void Update ()
    {
        DinoRun();
        if (Input.GetMouseButtonDown(0))
        {
            DinoJump();
        }
	}

    private void DinoJump()
    {
        rb.velocity = new Vector2(0, jumpSpeed);
    }

    private void DinoRun()
    {
        transform.Translate(transform.right * multiplier * Time.deltaTime);
    }
}
