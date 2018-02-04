using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scroll : MonoBehaviour {
    public float speed = 1;
    private Rigidbody2D rb;
    private BoxCollider2D groundCollider;
    private float horizontalLength;

	// Use this for initialization
	void Start () {
        rb = GetComponent<Rigidbody2D>();
        rb.velocity = new Vector2(-speed, 0);
        groundCollider = GetComponent<BoxCollider2D>();
        horizontalLength = groundCollider.size.x;
	}
	
	// Update is called once per frame
	void Update () {
		if(GameControls.instance.endGame == true)
        {
            rb.velocity = Vector2.zero;
        }

        if(transform.position.x < -horizontalLength*4f)
        {
            transform.position = new Vector2(horizontalLength * 6f, transform.position.y);
        }
	}
}
