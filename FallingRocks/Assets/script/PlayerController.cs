﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour {
    public float speed = 7;
    float screenHalfWidth;

	// Use this for initialization
	void Start () {
        float halfPlayer = transform.localScale.x * 0.5f;
        screenHalfWidth = Camera.main.aspect * Camera.main.orthographicSize + halfPlayer;
        print(screenHalfWidth);
    }
	
	// Update is called once per frame
	void Update () {
        float inputX = Input.GetAxisRaw("Horizontal");
        float velocity = inputX * speed;
        transform.Translate(Vector2.right * velocity * Time.deltaTime);
        if (transform.position.x < -screenHalfWidth)
        {
            transform.position = new Vector2(screenHalfWidth, transform.position.y);
        }

        if (transform.position.x > screenHalfWidth)
        {
            transform.position = new Vector2(-screenHalfWidth, transform.position.y);
        }
    }
}
