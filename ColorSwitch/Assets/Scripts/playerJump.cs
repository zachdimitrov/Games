using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerJump : MonoBehaviour
{
    public float jumpSpeed = 10f;
    private Rigidbody2D body;

    // Use this for initialization
    void Start()
    {
        this.body = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (name != "killed")
        {
            if (Input.GetMouseButtonDown(0))
            {
                body.velocity = Vector2.up * jumpSpeed;
            }
        }
        else
        {
            body.constraints = RigidbodyConstraints2D.FreezePositionY;
        }
    }
}
