using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class levelOnePin : MonoBehaviour {
    public float flySpeed = 20f;
    private Rigidbody2D pinBody;
    private bool shouldFly;

    // Use this for initialization
    void Start()
    {
        shouldFly = true;
        pinBody = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (shouldFly == true)
        {
            pinBody.MovePosition(pinBody.position + Vector2.up * flySpeed * Time.deltaTime);
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        shouldFly = false;
        if (collision.tag == "Target")
        {
            transform.SetParent(collision.gameObject.transform);
        }
        else if (collision.tag == "PinLevel")
        {
            SceneManager.LoadScene("LevelFail");
        }
        else
        {
            Debug.Log("Not Found");
        }
    }
}
