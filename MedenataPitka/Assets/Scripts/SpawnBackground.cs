﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnBackground : MonoBehaviour {
    public float bgXPosition = 18f;
    public GameObject prefab;
    private float xPos = 0;
    private float yPos = 0.3f;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        xPos = transform.position.x;
        //yPos = transform.position.y;
        Instantiate(prefab, new Vector2(xPos + bgXPosition, yPos), Quaternion.identity);
    }
}
