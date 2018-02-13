using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pipes : MonoBehaviour {
    private Rigidbody2D rb;
    public float speed = 1;

	// Use this for initialization
	void Start () {
        rb = GetComponent<Rigidbody2D>();
        rb.velocity = new Vector2(-speed, 0);
	}
	
	// Update is called once per frame
	void Update () {
        if (GameControls.instance.endGame == true)
        {
            rb.velocity = Vector2.zero;
        }
	}

    private void OnTriggerExit2D(Collider2D collision)
    {
        if(collision.GetComponent<Bird>() != null)
        {
            GameControls.instance.BirdScored();
        }
    }
}
