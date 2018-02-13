using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pitka : MonoBehaviour {
    public float multiplier = 10f;
    public float jumpSpeed = 20f;
    private Rigidbody2D rb;

	// Use this for initialization
	void Start () {
        rb = GetComponent<Rigidbody2D>();
	}
	
	// Update is called once per frame
	void Update () {
        MovePitka();

        if (Input.GetMouseButtonDown(0))
        {
            JumpPitka();
        }
    }

    public void MovePitka()
    {
        transform.Translate(transform.right * multiplier * Time.deltaTime);
    }

    private void JumpPitka()
    {
        rb.velocity = new Vector2(0, jumpSpeed);
    }
}
